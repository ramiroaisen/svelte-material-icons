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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12.5 2L12 4L10 6.31L5 9H7L9.5 18L12 20L12.5 22H13.5L14 20L16.5 18L19 9H21L16 6.31L14 4L13.5 2M9 9H17L14.78 17H11.22M3 14V22H11.5L11 20H8L5 17V14Z" fill="{color}"/></svg>