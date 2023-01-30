<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20.84 22.73L17.28 19.17L12.57 21.82C12.41 21.94 12.21 22 12 22S11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L4.3 6.19L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M12 4.15L17.96 7.5L13.31 10.11L20.53 17.33C20.82 17.16 21 16.85 21 16.5V7.5C21 7.12 20.79 6.79 20.47 6.62L12.57 2.18C12.41 2.06 12.21 2 12 2S11.59 2.06 11.43 2.18L7.56 4.36L9 5.82L12 4.15Z" fill="{color}"/></svg>