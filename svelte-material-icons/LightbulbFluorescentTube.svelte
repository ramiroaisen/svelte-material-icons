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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7.05 2.81L6.5 3.34L5.11 1.92L3.87 3.16L5.28 4.58L4.58 5.28L3.16 3.87L1.92 5.11L3.34 6.5L2.81 7.05L16.95 21.19L17.5 20.66L18.89 22.08L20.13 20.84L18.72 19.43L19.42 18.72L20.84 20.13L22.08 18.9L20.66 17.5L21.19 16.95L7.05 2.81Z" fill="{color}"/></svg>