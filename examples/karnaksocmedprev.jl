using Karnak, Luxor, Graphs, NetworkLayout, Colors
using Random

Random.seed!(42)
logo = readsvg("docs/src/assets/logo.svg")



function hiero()
    tiles = Tiler(1280, 640, 8, 12)
    for (pos, n) in tiles
        @layer begin
            translate(pos)
            bb = BoundingBox(box(O, tiles.tilewidth, tiles.tileheight))
            rule(O + (tiles.tilewidth)/2, π/2)
            R = rand(1:10)
            if R  == 1
                g = binary_tree(rand(2:4))
                dirg = SimpleDiGraph(collect(edges(g)))
                drawgraph(dirg, vertexshapesizes = 1, layout = buchheim, edgecurvature=0, boundingbox=bb, margin=5)
            elseif R  == 2
                g = star_graph(rand(3:10))
                drawgraph(g, boundingbox=bb, margin=10,  layout=stress, vertexstrokeweights=0.25)
            elseif R  == 3
                g = smallgraph(:truncatedcube)
                drawgraph(g, boundingbox=bb, margin=10,  vertexshapes = :none, layout=stress, vertexstrokeweights=0.3)
            elseif R  == 4
                g = smallgraph(:tutte)
                drawgraph(g, boundingbox=bb, margin=10,  vertexshapes = :none, layout=stress, vertexstrokeweights=0.3)
            elseif R  == 5
                g = smallgraph(:truncatedtetrahedron)
                drawgraph(g, boundingbox=bb, margin=10,  vertexshapesizes = 2, layout=stress, vertexstrokeweights=0.3)
            elseif R  == 6
                g = smallgraph(:cubical)
                drawgraph(g, boundingbox=bb, margin=10,  layout = Spring(Ptype=Float64))
            elseif R  == 7
                g = smallgraph(:octahedral)
                drawgraph(g, boundingbox=bb, margin=10,  layout = Spring(Ptype=Float64))
            else
                g = complete_graph(rand(4:12))
                drawgraph(g, boundingbox=bb, margin=10, vertexshapesizes = 1, vertexstrokeweights=0.15, layout = Spring(Ptype=Float64))
            end
        end
    end
end

@png begin
    #background("#bc9e78")


     pl = box(BoundingBox())
      mesh1 = mesh(pl, [
          Colors.RGBA(0.0, 0.0, 0.1, 0.99),
          Colors.RGBA(0.7, 0.5, 0.0, 0.99),
          Colors.RGBA(0.0, 0.0, 0.0, 0.99),
          Colors.RGBA(0.0, 0.2, 0.4, 0.99),
          ])
      setmesh(mesh1)
      paint()

    panes = Tiler(1280,  640, 1, 2, margin=0)


    @layer begin
        #setopacity(0.1)
    box(first(panes[1]), 640, 640, :fill)
    box(first(panes[1]), 640, 640, :clip)
    sethue("gold2")
    setopacity(0.3)
    hiero()
    clipreset()
end

    @layer begin
    setopacity(0.4)
    sethue(0.05, 0.1, 0.3)
    box(first(panes[2]), 640, 640, :fill)
    box(first(panes[2]), 640, 640, :clip)
#    sethue("black")
#    setopacity(1.0)
    setopacity(0.2)
    sethue("gold2")
    hiero()
    clipreset()
end

    @layer begin
        translate(first(panes[1]))
        scale(0.9)
        placeimage(logo, O, centered=true)
    end

    @layer begin
#       sethue("black")
        translate(first(panes[2]))
        fontsize(140)
       fontface("EgyptianWide")
       bx = box(O, panes.tilewidth/1.5, panes.tileheight/1.5)
       #poly(bx, :stroke, close=true)
       textoutlines("Karnak", O + (0, -150), halign=:center, :path)
        @layer begin
            sethue("gold")
            fillpreserve()
            setline(6)
               sethue("black")
               strokepath()
        end

    sethue("gold")
       bx = box(O, panes.tilewidth/1.5, panes.tileheight/4)
       fontsize(30)
       textwrap("A small Luxor.jl utility package to help with drawing some graph-style drawings, more for decorative purposes than anything else. Uses Graphs.jl and NetworkLayout.jl.", 800, boxtopleft(BoundingBox(bx)), leading=get_fontsize() + 10)

    end


    # @layer begin
    #     sethue("gold")
    #     setopacity(0.2)
    #     for pt in randompointarray(BoundingBox(), 30)
    #         star(pt, 20, 6, 0.1, rand() * 2π, :fill)
    #     end
    # end

end 1280 640 "docs/src/assets/figures/karnak-social-media-preview.png"
