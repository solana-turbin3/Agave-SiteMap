# Agave Site Map (ASM)


The main [Agave repository](https://github.com/anza-xyz/agave) has a lot of folders, each of which corresponds to a component of the Agave client. The sheer size of the repository can be overwhelming to study and more often than not, you are interested in a single part of the system buried in a lot of code.

The Agave Site Map provides a modular and interactive way to explore every section of the Agave client in the context of Solana's architecture eliminating the need to sift through endless lines of code. ASM also enables isolated package builds of the Agave client in your local environment with the ability to spin up the dependencies required for you to develop and test in isolation.

## Getting Started

To use ASM navigate to the [ASM website](https://agave-sitemap.vercel.app/) and choose a component (Note: some components are still under development). The parent components are designed into various stages to reflect a Solana transaction lifecycle.

For example, to explore the fetch stage of the Solana block building process, you'd have to **ASM > Block Building > Fetch stage**.
![ASM Navigation](./assets/Screenshot%202025-06-06%20at%203.02.30 PM.jpg).

On the component page you can find an interactive map showing how the components interact with the rest of the Agave components.
![fetch stage](./assets/Screenshot%202025-06-06%20at%203.11.35 PM.jpg)

Click on any specific component on any stage to get a birdeye view of what that component does, its relationship with other components in Agave client and so much more. 

Click the "Clone <component> to your repo" button to get a set of command you can run to set up the component on your local machine. 

## WIP/Next Features

- Integrate Mollusk 0.2 enabling users to register their own custom syscalls with the VM and test programs that use them
