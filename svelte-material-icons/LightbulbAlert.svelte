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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10 2C6.1 2 3 5.1 3 9C3 11.4 4.2 13.5 6 14.7V17C6 17.6 6.4 18 7 18H13C13.6 18 14 17.6 14 17V14.7C15.8 13.4 17 11.3 17 9C17 5.1 13.9 2 10 2M7 21C7 21.6 7.4 22 8 22H12C12.6 22 13 21.6 13 21V20H7V21M19 12V7H21V13H19M19 17V15H21V17H19Z" fill="{color}"/></svg>