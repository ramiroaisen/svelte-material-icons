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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7 3A5 5 0 0 0 9 7A5 5 0 0 0 7 11A5 5 0 0 0 11 15.9V18H9V20H11V22H13V20H15V18H13V15.9A5 5 0 0 0 17 11A5 5 0 0 0 15 7A5 5 0 0 0 17 3H15A3 3 0 0 1 12 6A3 3 0 0 1 9 3M12 8A3 3 0 0 1 15 11A3 3 0 0 1 12 14A3 3 0 0 1 9 11A3 3 0 0 1 12 8Z" fill="{color}"/></svg>