/// <reference types="@daks.dev/svelte.sdk/types" />

type ComponentType = import('svelte').ComponentType;
declare interface MDComponent extends ComponentType {
  $$prop_def: NonNullable<unknown>;
}
declare module '*.(svx|md)' {
  const Component: MDComponent;
  export default Component;
  export const metadata: Record<string, unknown>;
}

declare namespace App {
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

declare interface Infographic {
  icon: ImageMetadata;
  title: string;
  content: string;

  max: number;
  min: number;
  count: number;
  node: HTMLElement;
}
