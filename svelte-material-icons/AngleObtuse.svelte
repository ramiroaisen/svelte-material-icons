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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21,19H9.31L4.07,5.36L5.93,4.64L8.96,12.5C9.5,12.29 10.09,12.17 10.71,12.17V12.17C13.38,12.17 15.56,14.34 15.58,17H21V19M10.69,17H13.58C13.56,15.42 12.3,14.17 10.71,14.17C10.34,14.17 10,14.24 9.67,14.36L10.69,17Z" fill="{color}"/></svg>