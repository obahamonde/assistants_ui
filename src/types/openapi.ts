interface AllOf {
  $ref: string;
}

interface AnyOf {
  $ref: string;
}

interface OneOf {
  $ref: string;
}

interface OpenAPIComponentProperty<T> {
  type: string;
  title?: string;
  description?: string;
  nullable?: boolean;
  default?: T;
  enum?: Array<any>;
  anyOf?: Array<AnyOf>;
  oneOf?: Array<OneOf>;
  allOf?: Array<AllOf>;
  readOnly?: boolean;
  writeOnly?: boolean;
  items?: OpenAPIComponentProperty<T>;
  additionalProperties?: OpenAPIComponentProperty<T>;
  $ref?: string;
}

interface IOpenAPISchema<T> {
  type: "object";
  properties: {
    [key: string]: OpenAPIComponentProperty<T>;
  };
  title?: string;
  description?: string;
  required?: Array<string>;
}
