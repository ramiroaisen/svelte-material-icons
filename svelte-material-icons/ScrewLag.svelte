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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10,19.3L14,16.6V20L12,22L10,20V19.3M14,12.7L10,15.4V17.4L9,18V19L15,15.1V14L14,14.7V12.7M7,2V5H17V2H7M9,6V9L10,9.7V13.4L9,14V15L15,11.1V10L14,10.7C14,10.7 14,10.3 14,9.7L15,9V6H9Z" fill="{color}"/></svg>