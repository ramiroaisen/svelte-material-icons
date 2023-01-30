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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M18 10L15 7L19 3V5L22 8L20 10L19 9L18 10M17 11L14 8L13 9H12.2L17 13.8V11M2.39 1.73L1.11 3L7.11 9H5L3 7L2 8L5 11V14L4 15V21H6V18L8 15H13.11L15 16.89V21H17V18.89L20.84 22.73L22.11 21.46L2.39 1.73Z" fill="{color}"/></svg>