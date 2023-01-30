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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17,12.77C15.96,14.42 14.22,15.5 12.25,15.5C9.07,15.5 6.5,12.7 6.5,9.25C6.5,5.8 9.07,3 12.25,3C14.22,3 15.96,4.08 17,5.73V3H18V15.25C18,20.71 14.54,21 11.5,21C9,21 7.55,19.31 7.13,17H8.14C8.5,18.75 9.54,20 11.5,20C13.72,20 17,20.05 17,15.25V15.25L17,12.77M12.25,4C9.63,4 7.5,6.35 7.5,9.25C7.5,12.15 9.63,14.5 12.25,14.5C14.87,14.5 17,12.15 17,9.25C17,6.35 14.87,4 12.25,4Z" fill="{color}"/></svg>