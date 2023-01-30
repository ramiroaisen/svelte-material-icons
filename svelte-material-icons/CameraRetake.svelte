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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20,5H17L15,3H9L7,5H4A2,2 0 0,0 2,7V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V7A2,2 0 0,0 20,5M12,18C10.92,18 9.86,17.65 9,17L10.44,15.56C10.91,15.85 11.45,16 12,16A3,3 0 0,0 15,13A3,3 0 0,0 12,10C10.74,10 9.6,10.8 9.18,12H11L8,15L5,12H7.1C7.65,9.29 10.29,7.55 13,8.1C15.7,8.65 17.45,11.29 16.9,14C16.42,16.33 14.38,18 12,18Z" fill="{color}"/></svg>