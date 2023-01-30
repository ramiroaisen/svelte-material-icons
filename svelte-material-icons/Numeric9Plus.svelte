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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19 11H17V9H15V11H13V13H15V15H17V13H19V11M10 7H8C6.9 7 6 7.9 6 9V11C6 12.11 6.9 13 8 13H10V15H6V17H10C11.11 17 12 16.11 12 15V9C12 7.89 11.1 7 10 7M10 11H8V9H10V11Z" fill="{color}"/></svg>