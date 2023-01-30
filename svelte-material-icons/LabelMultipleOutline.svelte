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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4 18H13L11 20H4C3.5 20 2.97 19.79 2.59 19.41C2.21 19.03 2 18.5 2 18V8H4V18M17.63 4.84C17.27 4.33 16.67 4 16 4H8C6.9 4 6 4.9 6 6V14C6 15.1 6.9 16 8 16H16C16.67 16 17.27 15.66 17.63 15.15L22 10L17.63 4.84M16 14H8V6H16L19.55 10Z" fill="{color}"/></svg>