import { Button, Group, Menu } from "@mantine/core";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { useEffect, useState, useRef } from "react";
import ChevronDown from "../icons/ChevronDown";
import ChevronUp from "../icons/ChevronUp";
import { isInViewport } from "../utils";
import { table } from "./Table";

export default ({ data, field }) => {
  const [collapse, setCollapse] = useState(false);
  const row = useRef();
  const anchor = useRef();
  const [widthAtResize, setWidthAtResize] = useState(0);
  const [opened, handlers] = useDisclosure(false);

  const { width } = useViewportSize();

  useEffect(() => {
    if (row.current && !isInViewport(row.current)) {
      setWidthAtResize(anchor.current.getBoundingClientRect().left);
      setCollapse(true);
    } else if (
      widthAtResize !== 0 &&
      table.current.clientWidth > widthAtResize
    ) {
      setCollapse(false);
    }
  }, [width]);

  return collapse ? (
    <td>
      <Menu
        opened={opened}
        onOpen={handlers.open}
        onClose={handlers.close}
        control={
          <Button style={{ padding: "0 0.4rem", height: "1.5rem" }}>
            {field} {opened ? <ChevronUp /> : <ChevronDown />}
          </Button>
        }
      >
        {data.map((value, k) => (
          <Menu.Item style={{ height: "2rem" }} key={k}>
            {value}
          </Menu.Item>
        ))}
      </Menu>
    </td>
  ) : (
    <td>
      <Group
        ref={row}
        noWrap
        style={{ width: "fit-content", display: "inline-flex" }}
      >
        {data.map((value, k) => (
          <div key={k} className="inner-values">
            {value}
          </div>
        ))}
      </Group>
      <span ref={anchor}></span>
    </td>
  );
};
