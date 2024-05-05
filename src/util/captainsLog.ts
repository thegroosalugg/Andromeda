export function captainsLog(...args: unknown[]) {
  let output = '';

  for (let i = 0; i < args.length; i++) {
    const variable = Object.keys(args[i] as object)[0];
    const data = (args[i] as {[key: string]: unknown})[variable];
    const title = `${variable}:`;
    output += `${title.padEnd(20)} ${JSON.stringify(data, null, 2)}\n\n`;
  }

  console.clear();
  console.log(output);
}
