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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M8,7L6,2L10,4L12,2L14,4L18,2L16,7H8M16,22C10,22 8,22 8,22C2,22 3,18 3,18C3,18 4,11 8,9H16C20,11 21,18 21,18C21,18 22,22 16,22M7.5,12.5A1.5,1.5 0 0,0 9,14A1.5,1.5 0 0,0 10.5,12.5A1.5,1.5 0 0,0 9,11A1.5,1.5 0 0,0 7.5,12.5M16.5,18.5A1.5,1.5 0 0,0 15,17A1.5,1.5 0 0,0 13.5,18.5A1.5,1.5 0 0,0 15,20A1.5,1.5 0 0,0 16.5,18.5M16.5,12.35L15.15,11L7.5,18.65L8.87,20L16.5,12.35Z" fill="{color}"/></svg>