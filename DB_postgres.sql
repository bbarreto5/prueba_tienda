PGDMP         3        
        x            tienda_prueba %   10.14 (Ubuntu 10.14-0ubuntu0.18.04.1) %   10.14 (Ubuntu 10.14-0ubuntu0.18.04.1) )    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �           1262    24576    tienda_prueba    DATABASE        CREATE DATABASE tienda_prueba WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'es_CO.UTF-8' LC_CTYPE = 'es_CO.UTF-8';
    DROP DATABASE tienda_prueba;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    13081    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            �           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    40973    pedidos    TABLE     �   CREATE TABLE public.pedidos (
    id integer NOT NULL,
    id_usuario integer NOT NULL,
    pedido character varying NOT NULL,
    fecha date NOT NULL,
    estado boolean NOT NULL
);
    DROP TABLE public.pedidos;
       public         postgres    false    3            �            1259    40969    pedidos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pedidos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.pedidos_id_seq;
       public       postgres    false    202    3            �           0    0    pedidos_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.pedidos_id_seq OWNED BY public.pedidos.id;
            public       postgres    false    200            �            1259    40971    pedidos_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.pedidos_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.pedidos_id_usuario_seq;
       public       postgres    false    202    3            �           0    0    pedidos_id_usuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.pedidos_id_usuario_seq OWNED BY public.pedidos.id_usuario;
            public       postgres    false    201            �            1259    40983    pedidos_productos    TABLE     �   CREATE TABLE public.pedidos_productos (
    id_pedido integer NOT NULL,
    id_producto integer NOT NULL,
    fecha date,
    stado boolean,
    precio double precision NOT NULL
);
 %   DROP TABLE public.pedidos_productos;
       public         postgres    false    3            �            1259    40986    pedidos_productos_id_pedido_seq    SEQUENCE     �   CREATE SEQUENCE public.pedidos_productos_id_pedido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.pedidos_productos_id_pedido_seq;
       public       postgres    false    3    203            �           0    0    pedidos_productos_id_pedido_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.pedidos_productos_id_pedido_seq OWNED BY public.pedidos_productos.id_pedido;
            public       postgres    false    204            �            1259    40992 !   pedidos_productos_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.pedidos_productos_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.pedidos_productos_id_producto_seq;
       public       postgres    false    203    3            �           0    0 !   pedidos_productos_id_producto_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.pedidos_productos_id_producto_seq OWNED BY public.pedidos_productos.id_producto;
            public       postgres    false    205            �            1259    24585 	   productos    TABLE     �   CREATE TABLE public.productos (
    nombre character varying NOT NULL,
    cantidad integer NOT NULL,
    precio double precision,
    f_creacion date NOT NULL,
    f_actualizacion date NOT NULL,
    estado boolean NOT NULL,
    id integer NOT NULL
);
    DROP TABLE public.productos;
       public         postgres    false    3            �            1259    40960    productos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.productos_id_seq;
       public       postgres    false    3    197            �           0    0    productos_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.productos_id_seq OWNED BY public.productos.id;
            public       postgres    false    199            �            1259    24577    usuarios    TABLE     @  CREATE TABLE public.usuarios (
    nombre character varying,
    apellido character varying,
    "n_Identidad" integer NOT NULL,
    correo character varying NOT NULL,
    celular character varying,
    f_creacion date NOT NULL,
    f_actualizacion date NOT NULL,
    estado boolean NOT NULL,
    id integer NOT NULL
);
    DROP TABLE public.usuarios;
       public         postgres    false    3            �            1259    32768    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public       postgres    false    3    196            �           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
            public       postgres    false    198            %           2604    40976 
   pedidos id    DEFAULT     h   ALTER TABLE ONLY public.pedidos ALTER COLUMN id SET DEFAULT nextval('public.pedidos_id_seq'::regclass);
 9   ALTER TABLE public.pedidos ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    200    202    202            &           2604    40977    pedidos id_usuario    DEFAULT     x   ALTER TABLE ONLY public.pedidos ALTER COLUMN id_usuario SET DEFAULT nextval('public.pedidos_id_usuario_seq'::regclass);
 A   ALTER TABLE public.pedidos ALTER COLUMN id_usuario DROP DEFAULT;
       public       postgres    false    202    201    202            '           2604    40988    pedidos_productos id_pedido    DEFAULT     �   ALTER TABLE ONLY public.pedidos_productos ALTER COLUMN id_pedido SET DEFAULT nextval('public.pedidos_productos_id_pedido_seq'::regclass);
 J   ALTER TABLE public.pedidos_productos ALTER COLUMN id_pedido DROP DEFAULT;
       public       postgres    false    204    203            (           2604    40994    pedidos_productos id_producto    DEFAULT     �   ALTER TABLE ONLY public.pedidos_productos ALTER COLUMN id_producto SET DEFAULT nextval('public.pedidos_productos_id_producto_seq'::regclass);
 L   ALTER TABLE public.pedidos_productos ALTER COLUMN id_producto DROP DEFAULT;
       public       postgres    false    205    203            $           2604    40962    productos id    DEFAULT     l   ALTER TABLE ONLY public.productos ALTER COLUMN id SET DEFAULT nextval('public.productos_id_seq'::regclass);
 ;   ALTER TABLE public.productos ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    199    197            #           2604    32770    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    198    196            �          0    40973    pedidos 
   TABLE DATA               H   COPY public.pedidos (id, id_usuario, pedido, fecha, estado) FROM stdin;
    public       postgres    false    202   �+       �          0    40983    pedidos_productos 
   TABLE DATA               Y   COPY public.pedidos_productos (id_pedido, id_producto, fecha, stado, precio) FROM stdin;
    public       postgres    false    203   �+       �          0    24585 	   productos 
   TABLE DATA               f   COPY public.productos (nombre, cantidad, precio, f_creacion, f_actualizacion, estado, id) FROM stdin;
    public       postgres    false    197   ,       �          0    24577    usuarios 
   TABLE DATA               }   COPY public.usuarios (nombre, apellido, "n_Identidad", correo, celular, f_creacion, f_actualizacion, estado, id) FROM stdin;
    public       postgres    false    196   �,       �           0    0    pedidos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.pedidos_id_seq', 1, false);
            public       postgres    false    200            �           0    0    pedidos_id_usuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.pedidos_id_usuario_seq', 1, false);
            public       postgres    false    201            �           0    0    pedidos_productos_id_pedido_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.pedidos_productos_id_pedido_seq', 1, false);
            public       postgres    false    204            �           0    0 !   pedidos_productos_id_producto_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.pedidos_productos_id_producto_seq', 1, false);
            public       postgres    false    205            �           0    0    productos_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.productos_id_seq', 10, true);
            public       postgres    false    199            �           0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 2, true);
            public       postgres    false    198            *           2606    40982    pedidos pedidos_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_pkey;
       public         postgres    false    202            �      x������ � �      �      x������ � �      �   �   x�}�;
1�z|���Z�%]��6���H#wx:_�����A����V�F���@��I�	te9�@�+a<qN5�M�cD�-p؆^��A�jI���A:m��;���R��H.CK��#��o���ad      �   ]   x�K*J�K���tJ,*J-��442615�L�LM�O�*���LvH�M���K���46C�id`d�k`�kh��,�4�k�kbF~	Ifq��qqq �-�     