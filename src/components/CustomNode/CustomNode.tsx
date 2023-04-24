import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import Tag from "../Tag";
import Text from "../Text";
import { Styles } from "./style";
import { CSSProperties } from "styled-components";

const handleStyleBottom: CSSProperties = {
  height: 30,
  width: 30,
  background: "transparent",
  border: "none",
};

export const CustomNode = (props: NodeProps) => {
  return (
    <>
      <Handle type="source" position={Position.Top} style={handleStyleBottom} />
      <Styles.Container>
        <Styles.Content>
          <div>
            <Text>Boas Vindas</Text>
            <Tag>Texto simples</Tag>
          </div>
        </Styles.Content>
      </Styles.Container>
      <Handle
        type="source"
        position={Position.Bottom}
        style={handleStyleBottom}
        id="a"
      />
      <Handle
        type="source"
        position={Position.Left}
        style={handleStyleBottom}
        id="b"
      />
      <Handle
        type="source"
        position={Position.Right}
        style={handleStyleBottom}
        id="c"
      />
    </>
  );
};
