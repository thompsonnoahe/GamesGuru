type MultiMap<T> = { [key: string]: T };

export class QueryBuilder {
  private fields: MultiMap<number[]>;

  constructor(obj: MultiMap<number[]>) {
    this.fields = obj;
  }

  toString() {
    const str: string[] = [];

    for (const key of Object.keys(this.fields)) {
      const values = this.fields[key];
      str.push(`${key} = (${values.join(",")})`);
    }

    return str.join(" & ");
  }
}
