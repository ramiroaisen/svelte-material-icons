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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3M8.25,15H9.75L10.75,11.57V15H12.25V9H10L9,12.43L8,9H5.75V15H7.25V11.57L8.25,15M13.5,9V15H15V13H16.15L17,15H18.5L17.6,12.9C18.1,12.65 18.5,12.1 18.5,11.5V10.5C18.5,9.65 17.85,9 17,9H13.5M15,10.5H17V11.5H15V10.5Z" fill="{color}"/></svg>