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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22.11 21.46L2.39 1.73L1.11 3L5.06 6.95L4 8V20C4 21.11 4.89 22 6 22H18C18.58 22 19.1 21.75 19.46 21.35L20.84 22.73L22.11 21.46M18 20H6V8.83L6.47 8.36L18 19.89V20M10.83 4H18V14.8L20 16.8V4C20 2.9 19.11 2 18 2H10L7.6 4.4L9 5.81L10.83 4Z" fill="{color}"/></svg>