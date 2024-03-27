import { Badge } from "@/components/ui/badge";
import { HoverCard } from "@/components/ui/hover-card";
import React from "react";
import { Separator } from "@/components/ui/separator";

export const VerticalTimelineRoot = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="relative vertical-timeline-root">{children}</div>;
};

interface VerticalTimelineElementProps {
  type: "work" | "education" | "project";
  icon?: React.ReactNode;
  title: string;
  dateStart: string;
  dateEnd?: string | null;
  current: boolean;
}

export const VerticalTimeline = ({
  ...props
}: VerticalTimelineElementProps) => {
  return (
    <div className="vertical-timeline-element">
      <div className="vertical-timeline-element-icon">{props.icon}</div>
      <div className="vertical-timeline-element-content">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{props.title}</h3>
          <Badge variant="secondary">{props.dateStart}</Badge>
        </div>
        <Separator />
      </div>
    </div>
  );
};

// export default const VerticalTimeline = () => {
//   VerticalTimelineRoot: any;
//   VerticalTimelineElementContent: any;
//   VerticalTimelineElementIcon: any;
// }
