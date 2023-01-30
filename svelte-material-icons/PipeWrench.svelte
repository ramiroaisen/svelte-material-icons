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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M16.17 5.63L14.06 7.78L11.91 5.63L16.17 1.41L19.69 4.92C20.86 6.09 20.86 8 19.69 9.19L16.17 5.63M4.83 12.7L7 14.81L10.5 11.3L8.39 9.19L4.83 12.7M15.47 7.78L19 11.3L17.58 12.7L16.88 12L6.23 22.59L3.42 19.78L11.91 11.3L7.69 7.03L9.8 4.92L14.06 9.19L15.47 7.78Z" fill="{color}"/></svg>