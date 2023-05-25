class CompletionChunkToTextContentTransformer
  implements Transformer<Uint8Array, Uint8Array>
{
  private readonly textDecoder = new TextDecoder();
  private readonly textEncoder = new TextEncoder();

  async transform(
    chunk: Uint8Array,
    controller: TransformStreamDefaultController<Uint8Array>
  ) {
    const text = this.textDecoder.decode(chunk);
    const lines = text.split("\n");

    for (const line of lines) {
      if (line.length === 0) {
        continue;
      }

      if (line === "data: [DONE]") {
        controller.terminate();
        break;
      }

      const json = line.substring(text.indexOf("{"), text.lastIndexOf("}") + 1);
      const { choices } = JSON.parse(json);

      if (choices) {
        const content = choices
          .map((choice: any) => choice.delta.content)
          .join(" ");
        controller.enqueue(this.textEncoder.encode(content));
      }
    }
  }
}

const transformer = new CompletionChunkToTextContentTransformer();

export class CompletionChunkToTextContentStream extends TransformStream {
  constructor() {
    super(transformer);
  }
}
