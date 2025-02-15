"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Users",
    href: "/users",
    description: "User management and interaction within the system.",
  },
  {
    title: "Gulf Stream",
    href: "/gulf-stream",
    description: "Stream processing and data flow management.",
  },
  {
    title: "Block Building",
    href: "/block-building",
    description: "Construction and assembly of blockchain blocks.",
  },
  {
    title: "Turbine",
    href: "/turbine",
    description: "High-performance processing engine for blockchain operations.",
  },
  {
    title: "Block Verification",
    href: "/block-verification",
    description: "Validation and verification of blockchain blocks.",
  },
  {
    title: "Consensus",
    href: "/consensus",
    description: "Blockchain consensus mechanism and protocol implementation.",
  },
]

const userItems = [
  {
    title: "Wallet",
    href: "/users/wallet",
    description: "User wallet management and interactions.",
  },
  {
    title: "dApp",
    href: "/users/dapp",
    description: "Decentralized application interface and controls.",
  },
]

const gulfStreamItems = [
  {
    title: "RPC's",
    href: "/gulf-stream/rpcs",
    description: "Remote procedure calls and API endpoints.",
  },
  {
    title: "Validators",
    href: "/gulf-stream/validators",
    description: "Network validator management and monitoring.",
  },
]

const turbineItems = [
  {
    title: "Leader",
    href: "/turbine/leader",
    description: "Leader node operations and management.",
  },
  {
    title: "Root Node",
    href: "/turbine/root-node",
    description: "Root node configuration and monitoring.",
  },
]

const blockVerificationItems = [
  {
    title: "Shared Fetch",
    href: "/block-verification/shared-fetch",
    description: "Shared transaction fetching mechanism.",
  },
  {
    title: "Shared Verify Ledger Sig",
    href: "/block-verification/verify-ledger-sig",
    description: "Ledger signature verification process.",
  },
  {
    title: "Retransmit",
    href: "/block-verification/retransmit",
    description: "Block retransmission handling.",
  },
  {
    title: "Replay",
    href: "/block-verification/replay",
    description: "Transaction replay protection and handling.",
  },
  {
    title: "Gossip Service",
    href: "/block-verification/gossip",
    description: "Network gossip protocol service.",
  },
  {
    title: "Downstream Validators",
    href: "/block-verification/downstream",
    description: "Downstream validator management.",
  },
  {
    title: "Bank Accounts",
    href: "/block-verification/bank-accounts",
    description: "Bank account state management.",
  },
]

const blockBuildingItems = [
  {
    title: "Fetch Stage",
    href: "/block-building/fetch-stage",
    description: "Initial transaction fetching and processing stage.",
  },
  {
    title: "Sig Verify Stage",
    href: "/block-building/sig-verify",
    description: "Signature verification and validation process.",
  },
  {
    title: "Banking Stage",
    href: "/block-building/banking-stage",
    description: "Transaction processing and state management stage.",
  },
  {
    title: "Proof of History (POH) Service",
    href: "/block-building/poh-service",
    description: "Cryptographic time and sequence verification service.",
  },
  {
    title: "Bank - Accounts DB",
    href: "/block-building/accounts-db",
    description: "Account state and ledger database management.",
  },
  {
    title: "Broadcast Stage",
    href: "/block-building/broadcast",
    description: "Network distribution and propagation of blocks.",
  },
]

export function Navbar() {
  const pathname = usePathname()
  
  return (
    <div className="flex justify-center p-5">
      <NavigationMenu>
        <NavigationMenuList>
          {components.map((component) => {
            // Check if current path matches this section or any of its subsections
            const isActive = pathname === component.href || pathname.startsWith(component.href + '/')
            
            return (
              <NavigationMenuItem key={component.title}>
                <NavigationMenuTrigger 
                  className={cn(
                    isActive && "bg-accent text-accent-foreground"
                  )}
                >
                  {component.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {(() => {
                      switch (component.title) {
                        case "Users":
                          return userItems.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))
                        case "Gulf Stream":
                          return gulfStreamItems.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))
                        case "Block Building":
                          return blockBuildingItems.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))
                        case "Turbine":
                          return turbineItems.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))
                        case "Block Verification":
                          return blockVerificationItems.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))
                        default:
                          return (
                            <ListItem title={component.title} href={component.href}>
                              {component.description}
                            </ListItem>
                          )
                      }
                    })()}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  const pathname = usePathname()
  const isActive = pathname === props.href

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            isActive && "bg-accent text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
