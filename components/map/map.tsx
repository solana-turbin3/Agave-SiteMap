"use client";

import { useCallback } from "react";

import {
  ReactFlow,
  Background,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Connection,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import mapDataJson from "./mapData.json";

interface MapData {
  nodes: Node[];
  edges: Edge[];
}

export default function Map() {
  const mapData = mapDataJson as MapData;
  const [nodes, setNodes, onNodesChange] = useNodesState(mapData.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(mapData.edges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div
      style={{
        width: "80vw",
        height: "80vh",
        margin: "0 auto",
        border: "2px solid black",
        borderRadius: "10px",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
