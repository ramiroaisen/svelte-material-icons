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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,2.5L20.84,5.65L19.5,17.35L12,21.5L4.5,17.35L3.16,5.65L12,2.5M12,4.5L5,7L6.08,16.22L12,19.5L17.92,16.22L19,7L12,4.5M12,5.72L16.58,16H14.87L13.94,13.72H10.04L9.12,16H7.41L12,5.72M13.34,12.3L12,9.07L10.66,12.3H13.34Z" fill="{color}"/></svg>