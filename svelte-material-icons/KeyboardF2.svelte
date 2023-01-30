<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = undefined;
  export let ariaHidden = false;
  export let title = null;
  export let desc = null;

  let className = undefined;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5 7H11V9H7V11H10V13H7V17H5V7M13 7H17C18.11 7 19 7.9 19 9V11C19 12.11 18.11 13 17 13H15V15H19V17H13V13C13 11.9 13.9 11 15 11H17V9H13V7Z" fill="{color}"/></svg>