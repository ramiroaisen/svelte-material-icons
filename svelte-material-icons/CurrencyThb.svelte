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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M16.1 11.6C16.7 10.9 17 10 17 9C17 7.1 15.7 5.6 14 5.1L13 5V3H11V5H7V19H11V21H13V19H14C16.2 19 18 17.2 18 15C18 13.5 17.2 12.3 16.1 11.6M15 9C15 10.1 14.1 11 13 11V7C14.1 7 15 7.9 15 9M9 7H11V11H9V7M9 17V13H11V17H9M14 17H13V13H14C15.1 13 16 13.9 16 15S15.1 17 14 17Z" fill="{color}"/></svg>