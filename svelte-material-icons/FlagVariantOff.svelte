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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20.8 22.7L10.2 12.1C7.8 12.4 7 14 7 14V21H5V6.9L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M20 12V4C20 4 19 6 16 6C14 6 14 4 11 4C9.8 4 8.7 4.3 7.8 4.6L17.1 13.9C19.2 13.5 20 12 20 12Z" fill="{color}"/></svg>