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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5,10A2,2 0 0,0 3,12C3,13.11 3.9,14 5,14C6.11,14 7,13.11 7,12A2,2 0 0,0 5,10M5,16A4,4 0 0,1 1,12A4,4 0 0,1 5,8A4,4 0 0,1 9,12A4,4 0 0,1 5,16M10.5,11H14V8L18,12L14,16V13H10.5V11M5,6C4.55,6 4.11,6.05 3.69,6.14C5.63,3.05 9.08,1 13,1C19.08,1 24,5.92 24,12C24,18.08 19.08,23 13,23C9.08,23 5.63,20.95 3.69,17.86C4.11,17.95 4.55,18 5,18C5.8,18 6.56,17.84 7.25,17.56C8.71,19.07 10.74,20 13,20A8,8 0 0,0 21,12A8,8 0 0,0 13,4C10.74,4 8.71,4.93 7.25,6.44C6.56,6.16 5.8,6 5,6Z" fill="{color}"/></svg>