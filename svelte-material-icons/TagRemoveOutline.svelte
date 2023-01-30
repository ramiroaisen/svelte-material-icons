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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M6.5 5A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5M6.5 5A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5M21.41 11.58L12.41 2.58A2 2 0 0 0 11 2H4A2 2 0 0 0 2 4V11A2 2 0 0 0 2.59 12.42L3 12.82A5.62 5.62 0 0 1 5.08 12.08L4 11V4H11L20 13L13 20L11.92 18.92A5.57 5.57 0 0 1 11.18 21L11.59 21.41A2 2 0 0 0 13 22A2 2 0 0 0 14.41 21.41L21.41 14.41A2 2 0 0 0 22 13A2 2 0 0 0 21.41 11.58M6.5 5A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5M8.12 21.54L6 19.41L3.88 21.54L2.46 20.12L4.59 18L2.46 15.88L3.88 14.46L6 16.59L8.12 14.46L9.54 15.88L7.41 18L9.54 20.12Z" fill="{color}"/></svg>