import ConnectionLine from "@/components/ConnectionLine";
import CustomEdge from "@/components/CustomEdge/CustomEdge";
import CustomNode from "@/components/CustomNode";
import Labs from "@/components/Labs";
import TopMenu from "@/components/TopMenu";
import React, { useCallback, useState } from "react";
import ReactFlow, {
  Controls,
  Background,
  Panel,
  Node,
  BackgroundVariant,
  NodeTypes,
  FitViewOptions,
  DefaultEdgeOptions,
  Edge,
  applyNodeChanges,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  addEdge,
  applyEdgeChanges,
  MarkerType,
  ConnectionMode,
  useEdgesState,
  useNodesState,
  EdgeTypes,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "custom",
    data: { label: "Node inicial" },
    position: { x: 500, y: 250 },
  },
];

const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

const defaultEdgeOptions: DefaultEdgeOptions = {
  type: "default",
  deletable: true,
  updatable: true,
  selected: true,
};

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const edgeType: EdgeTypes = {
  default: CustomEdge,
};

export const Builder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const handleAddNewNode = () => {
    setNodes((prev) => [
      ...prev,
      {
        id: (nodes.length + 1).toString(),
        type: "custom",
        data: { label: "Node" },
        position: { x: 500, y: 250 },
      },
    ]);
  };

  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        defaultEdgeOptions={defaultEdgeOptions}
        nodeTypes={nodeTypes}
        edgeTypes={edgeType}
        connectionMode={ConnectionMode.Loose}
        onDoubleClick={handleAddNewNode}
        connectionLineComponent={ConnectionLine}
      >
        <Background
          id="1"
          gap={10}
          color="#f1f1f1"
          variant={BackgroundVariant.Lines}
        />
        <Background
          id="2"
          gap={50}
          offset={1}
          color="#ccc"
          variant={BackgroundVariant.Lines}
        />
        <Panel position="top-left">
          <TopMenu />
        </Panel>
        <Panel position="bottom-left">
          <Labs />
        </Panel>
        <Controls
          style={{
            display: "flex",
            flexDirection: "row",
            fill: "#5A4CFB",
          }}
        />
      </ReactFlow>
    </div>
  );
};
