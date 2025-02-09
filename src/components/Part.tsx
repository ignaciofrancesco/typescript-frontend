import { CoursePart } from "../types";

type PartProps = {
  part: CoursePart;
};

const Part = (props: PartProps) => {
  const { part } = props;

  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discrimianted union member: ${JSON.stringify(value)}`
    );
  };

  switch (part.kind) {
    case "basic":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>
            <em>{part.description}</em>
          </p>
        </div>
      );
    case "group":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>
            <em>Group project count: {part.groupProjectCount}</em>
          </p>
        </div>
      );
    case "background":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>
            <em>{part.description}</em>
          </p>
          <p>Background material: {part.backgroundMaterial}</p>
        </div>
      );
    case "special":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>
            <em>{part.description}</em>
          </p>
          <p>Requirements: {part.requirements.join(", ")}</p>
        </div>
      );
    default:
      assertNever(part);
  }
};

export default Part;
