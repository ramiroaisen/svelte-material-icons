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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,2C8.14,2 5,5.14 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9C19,5.14 15.86,2 12,2M9.59,5.17L12,7.58L14.41,5.17L15.83,6.58L13.41,9L15.83,11.41L14.41,12.83L12,10.41L9.59,12.83L8.17,11.41L10.59,9L8.17,6.58" fill="{color}"/></svg>