import type { Project } from "../types";

export const projectImageFocusClasses: Record<
  NonNullable<Project["imageFocus"]>,
  string
> = {
  center: "object-center",
  right: "object-[70%_center] md:object-center",
  "far-right": "object-[78%_center] md:object-center",
};
