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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M8 4V6H4V8H6.39C5.55 8.74 5 9.8 5 11C5 13.2 6.8 15 9 15C11.2 15 13 13.2 13 11C13 9.8 12.45 8.74 11.61 8H14V6H10V4M15 4V16H17V11H20V9H17V4M9 9C10.12 9 11 9.88 11 11C11 12.12 10.12 13 9 13C7.88 13 7 12.12 7 11C7 9.88 7.88 9 9 9M7 16V20H17V18H9V16Z" fill="{color}"/></svg>