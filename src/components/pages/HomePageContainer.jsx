import React from "react";
import TaskApp from "../../modules/tasks/TaskApp";

export default function HomePageContainer() {
  return (
    <div className="mx-auto my-auto h-full pt-5">
      <div className="mx-auto flex flex-col h-full">
        <TaskApp>
        </TaskApp>
      </div>
    </div>
  );
}
