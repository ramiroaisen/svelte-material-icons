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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13 14.89V16.59L17.21 20.79L15.79 22.21L13 19.41V22H11V19.41L8.21 22.21L6.79 20.79L11 16.59V14H5V6.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73L13 14.89M19 14V5H20C20.55 5 21 4.55 21 4V3C21 2.45 20.55 2 20 2H5.2L17.2 14H19Z" fill="{color}"/></svg>