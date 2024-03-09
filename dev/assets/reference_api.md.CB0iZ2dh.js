import{_ as n,c as s,o as a,a7 as p}from"./chunks/framework.BeFfHHm9.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api.md","filePath":"reference/api.md","lastUpdated":null}'),e={name:"reference/api.md"},l=p(`<div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Karnak.drawgraph-Tuple{Graphs.AbstractGraph}" href="#Karnak.drawgraph-Tuple{Graphs.AbstractGraph}">#</a> <b><u>Karnak.drawgraph</u></b> — <i>Method</i>. <p>Draw a graph <code>g</code> using coordinates in <code>layout</code> to fit in a Luxor <code>boundingbox</code> (defaulting to the current drawing&#39;s extent).</p><p>Returns a vector of Points, the location of the graph vertices as drawn.</p><p><strong>Keyword arguments</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>boundingbox::BoundingBox        graph fits inside this BB</span></span>
<span class="line"><span>layout                          Point[] or function</span></span>
<span class="line"><span>margin                          default 30</span></span>
<span class="line"><span>edgelist                        draw only these edges</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vertexfunction(vtx, coords) -&gt;  draw vertices</span></span>
<span class="line"><span>edgefunction(edgenumber, edgesrc, edgedest, from, to) -&gt; draw edges</span></span></code></pre></div><p><code>layout</code></p><ul><li>the layout method or coordinates to be used. Examples:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>layout = squaregrid</span></span>
<span class="line"><span></span></span>
<span class="line"><span>layout = shell</span></span>
<span class="line"><span></span></span>
<span class="line"><span>layout = vcat(</span></span>
<span class="line"><span>    between.(O + (-W/2, H), O + (W/2, H), range(0, 1, length=N)),</span></span>
<span class="line"><span>    between.(O + (-W/2, -H), O + (W/2, -H), range(0, 1, length=N)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>layout = stress</span></span>
<span class="line"><span></span></span>
<span class="line"><span>layout = (g) -&gt; spectral(adjacency_matrix(g), dim=2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>layout = shell ∘ adjacency_matrix</span></span>
<span class="line"><span></span></span>
<span class="line"><span>layout = (g) -&gt; sfdp(g, Ptype=Float64, dim=2, tol=0.05, C=0.4, K=2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>layout = Shell(nlist=[6:10,]) # inner shell for vertices 6 to 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>layout = squaregrid</span></span>
<span class="line"><span></span></span>
<span class="line"><span>the_positions = [(pt.x, pt.y) for pt in randompointarray(BoundingBox(), 50)[1:nv(G)]]</span></span>
<span class="line"><span>the_weights = rand(1:20, nv(G), nv(G))</span></span>
<span class="line"><span>layout=Stress(initialpos = the_positions,</span></span>
<span class="line"><span>    iterations = 30,</span></span>
<span class="line"><span>    weights = the_weights)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>layout = Stress(iterations = 100, weights = M) # M is matrix of weights</span></span>
<span class="line"><span></span></span>
<span class="line"><span>layout = Spring(iterations = 200, initialtemp = 2.5)</span></span></code></pre></div><p>Refer to the NetworkLayout.jl documentation for more.</p><p><strong>Extended help</strong></p><p>All keywords:</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> boundingbox                 BoundingBox                                              </span></span>
<span class="line"><span> margin                      Number                                                   </span></span>
<span class="line"><span> layout                      Vector{Point}                                            </span></span>
<span class="line"><span>                             function from NetworkLayout.jl                           </span></span>
<span class="line"><span>                             f(g::Graph)                                              </span></span>
<span class="line"><span> edgefunction                f(edgenumber::Int, edgesrc::Int, edgedest::Int, from::Point)</span></span>
<span class="line"><span> vertexfunction              f(vtx::Int, coordinates::Vector{Point})                  </span></span>
<span class="line"><span> edgecurvature               Float64                                                  </span></span>
<span class="line"><span> edgedashpatterns            Vector{Vector}[number]                                   </span></span>
<span class="line"><span>                             Vector{Number}                                           </span></span>
<span class="line"><span> edgegaps                    Vector                                                   </span></span>
<span class="line"><span>                             Range                                                    </span></span>
<span class="line"><span>                             Real</span></span>
<span class="line"><span>                             f(edgenumber::Int, edgesrc::Int, edgedest::Int, from::Point)                                                     </span></span>
<span class="line"><span> edgelabelcolors             Vector{Colorant}                                         </span></span>
<span class="line"><span>                             Colorant                                                 </span></span>
<span class="line"><span> edgelabelfontfaces          Vector{Strings}[edgenumber]                              </span></span>
<span class="line"><span>                             String                                                   </span></span>
<span class="line"><span>                             :none                                                    </span></span>
<span class="line"><span> edgelabelfontsizes          Vector{Number}                                           </span></span>
<span class="line"><span>                             Number                                                   </span></span>
<span class="line"><span> edgelabelrotations          Vector{angles}                                           </span></span>
<span class="line"><span>                             angle::Float64                                           </span></span>
<span class="line"><span>                             f(edgenumber, edges, edgedest, from, to)                 </span></span>
<span class="line"><span> edgelabels                  Vector                                                   </span></span>
<span class="line"><span>                             range                                                    </span></span>
<span class="line"><span>                             Dict{Int, Int}                                           </span></span>
<span class="line"><span>                             f(edgenumber, edgesrc, edgedest, from::Point, to::Point)</span></span>
<span class="line"><span>                               - this function must draw the required text </span></span>
<span class="line"><span>                             :none                                                    </span></span>
<span class="line"><span> edgelines                   Vector{Int}                                              </span></span>
<span class="line"><span>                             range                                                    </span></span>
<span class="line"><span>                             Int                                                      </span></span>
<span class="line"><span>                             f(edgenumber, edgesrc, edgedest, from::Point, to::Point) </span></span>
<span class="line"><span> edgelist                    Graphs.EdgeIterator                                      </span></span>
<span class="line"><span> edgestrokecolors            Vector{Colorant}[edge::Int]                              </span></span>
<span class="line"><span>                             Colorant                                                 </span></span>
<span class="line"><span>                             f(edgenumber, edgesrc, edgedest, from::Point, to::Point) </span></span>
<span class="line"><span> edgestrokeweights           Vector{Number}[vtx]                                      </span></span>
<span class="line"><span>                             range                                                    </span></span>
<span class="line"><span>                             Real                                                     </span></span>
<span class="line"><span>                             f(edgenumber, edgesrc, edgedest, from::Point, to::Point) </span></span>
<span class="line"><span> vertexfillcolors            Vector{Colorant}                                         </span></span>
<span class="line"><span>                             Colorant                                                 </span></span>
<span class="line"><span>                             :none                                                    </span></span>
<span class="line"><span>                             f(vtx::Int)                                              </span></span>
<span class="line"><span> vertexlabelfontfaces        Vector{Strings}                                          </span></span>
<span class="line"><span>                             String                                                   </span></span>
<span class="line"><span> vertexlabelfontsizes        Vector                                                   </span></span>
<span class="line"><span>                             range                                                    </span></span>
<span class="line"><span>                             Real                                                     </span></span>
<span class="line"><span>                             :none</span></span>
<span class="line"><span>                             f(vtx::Int, coord::Point[])</span></span>
<span class="line"><span>                              - function must return a numeric value for fontsize</span></span>
<span class="line"><span> vertexlabeloffsetangles     Vector                                                   </span></span>
<span class="line"><span>                             Range                                                    </span></span>
<span class="line"><span>                             Real                                                     </span></span>
<span class="line"><span> vertexlabeloffsetdistances  Vector                                                   </span></span>
<span class="line"><span>                             range                                                    </span></span>
<span class="line"><span>                             Real                                                     </span></span>
<span class="line"><span> vertexlabelrotations        Vector                                                   </span></span>
<span class="line"><span>                             range                                                    </span></span>
<span class="line"><span>                             Real                                                     </span></span>
<span class="line"><span>                             :none                                                    </span></span>
<span class="line"><span> vertexlabels                Vector{String}                                           </span></span>
<span class="line"><span>                             String                                                   </span></span>
<span class="line"><span>                             range[vtx::Int]                                          </span></span>
<span class="line"><span>                             :none                                                    </span></span>
<span class="line"><span>                             f(vtx::Int)</span></span>
<span class="line"><span>                             - this function must return a string                                              </span></span>
<span class="line"><span> vertexlabeltextcolors       Vector{Colorant}                                         </span></span>
<span class="line"><span>                             Colorant</span></span>
<span class="line"><span>                             f(vtx::Int)                                                 </span></span>
<span class="line"><span>                             :none                                                    </span></span>
<span class="line"><span> vertexshaperotations        f(vtx::Int)                                              </span></span>
<span class="line"><span>                             angle::Float64                                           </span></span>
<span class="line"><span> vertexshapes                Vector of :circle :square :none                          </span></span>
<span class="line"><span>                             range[vtx]                                               </span></span>
<span class="line"><span>                             :circle :square :none                                    </span></span>
<span class="line"><span>                             f(vtx::Int)                                              </span></span>
<span class="line"><span> vertexshapesizes            Vector{Real}                                             </span></span>
<span class="line"><span>                             range                                                    </span></span>
<span class="line"><span>                             Real                                                     </span></span>
<span class="line"><span>                             :none                                                    </span></span>
<span class="line"><span>                             f(vtx::Int)                                              </span></span>
<span class="line"><span> vertexstrokecolors          Vector                                                   </span></span>
<span class="line"><span>                             Colorant                                                 </span></span>
<span class="line"><span>                             :none                                                    </span></span>
<span class="line"><span>                             f(vtx::Int)                                              </span></span>
<span class="line"><span> vertexstrokeweights         Vector                                                   </span></span>
<span class="line"><span>                             range                                                    </span></span>
<span class="line"><span>                             :none                                                    </span></span>
<span class="line"><span>                             f(vtx::Int)</span></span></code></pre></div><p><a href="https://github.com/Cormullion/Karnak.jl/blob/d13229d9a1305ec88a698d0277fb00cd73c3f89e/src/drawgraph.jl#L850-L1005" target="_blank" rel="noreferrer">source</a></p></div><br>`,2),t=[l];function i(o,c,r,d,g,u){return a(),s("div",null,t)}const b=n(e,[["render",i]]);export{f as __pageData,b as default};
