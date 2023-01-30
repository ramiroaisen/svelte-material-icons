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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M6.62 10.79A15.1 15.1 0 0 0 13.21 17.38L15.41 15.18A1 1 0 0 1 16.41 14.93A11.36 11.36 0 0 0 20 15.5A1 1 0 0 1 21 16.5V20A1 1 0 0 1 20 21A17 17 0 0 1 3 4A1 1 0 0 1 4 3H7.5A1 1 0 0 1 8.5 4A11.36 11.36 0 0 0 9.07 7.57A1 1 0 0 1 8.82 8.57M21.71 4.71L20.29 3.29L15 8.59L12.71 6.29L11.29 7.71L15 11.41Z" fill="{color}"/></svg>