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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4 6V20H18V22H3C2.4 22 2 21.6 2 21V6H4M8 2H20C21.11 2 22 2.9 22 4V16C22 17.11 21.11 18 20 18H8C6.9 18 6 17.11 6 16V4C6 2.9 6.9 2 8 2M16.3 13.3L15.9 10.7L17.8 8.8L15.2 8.4L14 6L12.8 8.4L10.2 8.8L12.1 10.6L11.6 13.2L14 12L16.3 13.3Z" fill="{color}"/></svg>