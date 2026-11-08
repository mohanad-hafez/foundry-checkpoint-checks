"use strict";
function prepare(previous, expectedPrevious, sourceHead) {
  if (!/^[a-f0-9]{40}\n$/.test(previous) || !/^[a-f0-9]{40}$/.test(sourceHead)) throw new Error("Invalid checkpoint or source revision");
  if (previous !== expectedPrevious) throw new Error("Checkpoint changed; inspect before updating");
  const content = sourceHead + "\n";
  return { status: previous === content ? "noop" : "update", content };
}
module.exports = { prepare };
