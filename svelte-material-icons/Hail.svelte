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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4,16H7V22H4V16M19,2.39C18.92,3.86 18.55,5.13 17.86,6.21C17.17,7.29 16.22,8 15,8.39V22H13V16H11V22H9V10.08C8.72,10.17 8.5,10.28 8.39,10.41C7.45,11.16 7,12.19 7,13.5V14H5V13.5C5,11.53 5.72,9.94 7.13,8.72C8.53,7.56 10.16,7 12,7C13.41,7 14.56,6.64 15.47,5.95C16.5,5.11 17,3.95 17,2.5V2H19V2.39M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2Z" fill="{color}"/></svg>