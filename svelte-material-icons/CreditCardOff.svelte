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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M11.2 8L7.2 4H20A2 2 0 0 1 22 6V18A1.91 1.91 0 0 1 21.88 18.68L14.2 11H20V8M20.84 22.73L18.11 20H4A2 2 0 0 1 2 18V6A2 2 0 0 1 2.65 4.54L1.11 3L2.39 1.73L22.11 21.46M9.11 11L6.11 8H4V11Z" fill="{color}"/></svg>