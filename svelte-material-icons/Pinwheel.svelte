<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,12C12,9 14.5,6.5 17.5,6.5C20.5,6.5 23,9 23,12H12M12,12C12,15 9.5,17.5 6.5,17.5C3.5,17.5 1,15 1,12H12M12,12C9,12 6.5,9.5 6.5,6.5C6.5,3.5 9,1 12,1V12M12,12C15,12 17.5,14.5 17.5,17.5C17.5,20.5 15,23 12,23V12Z" fill="{color}"/></svg>