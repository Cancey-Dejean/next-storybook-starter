import React from "react";

export function BorderRadiusPresenter({ token }) {
  console.log(token);
  return (
    <div className="overflow-hidden rounded-[16px] border shadow-lg">
      <div className="p-5 pb-0">
        <div
          className="h-32 border shadow-md"
          style={{ borderRadius: token.value }}
        ></div>
      </div>

      <div className="flex flex-col gap-1 p-5">
        <div className="text-sm font-bold">{token.value}</div>
      </div>
    </div>
  );
}
