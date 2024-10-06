const glob = import.meta.glob("@/assets/image/**", {
  eager: true,
});

const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]: [string, unknown]) => [
    key,
    (value as { default: string }).default,
  ])
);

export default (path: string) => images[`/src/assets/image/${path}`];
