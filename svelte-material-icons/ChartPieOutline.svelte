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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13 11H19.95Q19.58 8.25 17.66 6.34 15.75 4.43 13 4.05M11 19.95V4.05Q8 4.43 6 6.69 4 8.95 4 12T6 17.31Q8 19.58 11 19.95M13 19.95Q15.75 19.6 17.68 17.68 19.6 15.75 19.95 13H13M12 12M12 22Q9.93 22 8.1 21.21 6.28 20.43 4.93 19.08 3.58 17.73 2.79 15.9 2 14.08 2 12T2.79 8.1Q3.58 6.28 4.93 4.93 6.28 3.58 8.1 2.79 9.93 2 12 2T15.89 2.79Q17.7 3.58 19.06 4.94 20.43 6.3 21.21 8.11 22 9.93 22 12 22 14.05 21.21 15.88 20.43 17.7 19.08 19.06 17.73 20.43 15.9 21.21 14.08 22 12 22Z" fill="{color}"/></svg>