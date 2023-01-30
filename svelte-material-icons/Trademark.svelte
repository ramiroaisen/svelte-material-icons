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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M9.8,8.44H6.87V16H4.89V8.44H2V7H9.8V8.44M13.5,7L15.96,13.5L18.41,7H21V16H19V13.5L19.22,9.24L16.63,16H15.28L12.7,9.25L12.9,13.5V16H10.93V7H13.5Z" fill="{color}"/></svg>