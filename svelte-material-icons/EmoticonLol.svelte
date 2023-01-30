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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15.07 8.93V4.93A4.06 4.06 0 0 1 15.73 2.72A10 10 0 0 0 2.73 15.72A4.06 4.06 0 0 1 4.94 15.06H8.94V19.06A4.06 4.06 0 0 1 8.28 21.27A10 10 0 0 0 21.28 8.27A4.06 4.06 0 0 1 19.07 8.93M11 6H12.5V7.5H14V9H11M7.5 14V12.5H6V11H9V14M15.89 15.9A5.5 5.5 0 0 1 9.8 17L17 9.8A5.5 5.5 0 0 1 15.89 15.89M4.89 21.08A2 2 0 0 1 2.89 19.08A2 2 0 0 1 4.89 17.08H6.89V19.08A2 2 0 0 1 4.93 21.07M19.07 2.93A2 2 0 0 1 21.07 4.93A2 2 0 0 1 19.07 6.93H17.07V4.93A2 2 0 0 1 19.07 2.93Z" fill="{color}"/></svg>