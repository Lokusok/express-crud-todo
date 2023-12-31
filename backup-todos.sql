PGDMP     8    0                {            todo    15.4    15.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16397    todo    DATABASE        CREATE DATABASE todo WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE todo;
                postgres    false            �            1259    16436    tasks    TABLE     �   CREATE TABLE public.tasks (
    id integer NOT NULL,
    title text NOT NULL,
    description text,
    type text,
    "createdAt" bigint,
    "expiredAt" bigint
);
    DROP TABLE public.tasks;
       public         heap    postgres    false            �            1259    16435    tasks_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.tasks_id_seq;
       public          postgres    false    215            �           0    0    tasks_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.tasks_id_seq OWNED BY public.tasks.id;
          public          postgres    false    214            d           2604    16439    tasks id    DEFAULT     d   ALTER TABLE ONLY public.tasks ALTER COLUMN id SET DEFAULT nextval('public.tasks_id_seq'::regclass);
 7   ALTER TABLE public.tasks ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �          0    16436    tasks 
   TABLE DATA           W   COPY public.tasks (id, title, description, type, "createdAt", "expiredAt") FROM stdin;
    public          postgres    false    215   �                   0    0    tasks_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.tasks_id_seq', 68, true);
          public          postgres    false    214            f           2606    16443    tasks tasks_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.tasks DROP CONSTRAINT tasks_pkey;
       public            postgres    false    215            h           2606    16445    tasks tasks_title_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_title_key UNIQUE (title);
 ?   ALTER TABLE ONLY public.tasks DROP CONSTRAINT tasks_title_key;
       public            postgres    false    215            �   Z  x�uV�n�8=��B_��V\��0��4��u.jS��X�)w�?EJr�IH[��jUT��������ޮ�n�<p��tRY#�KwJ��o�$�>���"Whr����*�s:�(�}H�@ʆx]U�P9�����П_��Gh{��D�� +�z���UӬQ!9�������T��9𡍊�ȃE��e(d0���Xh�8f ΁	0��n�ޥ_r��\�,�˻.F �<�/�h4��B�T�JLJ��n������&��^���������܅9ٝ	eB:��P���G��0�;��o�<������#=�d!)BR��W;7핢�6̏�&S%����5��~����Ρ!qa���<�M����$Sz����a�\�����\~i����Ww9\�B�8<��Bpc�HY�H1��G���5Qa ����G���I�zab�距n�zOr!�%s!
H?J�\�pD�Ļ�&��e�Xˊ����J��(&�!ru1{s���'�>	ct&�;�-��]EU�
�#U��RpY@��rk��?�_Jln�)Pe-�A�Z�#� ����_��%^���y0k��k����A��E��䢓�����]���)q��'O�7�k���unn�ȱK���0�^
�E�Jd��^�?$�s��r��<��a+�J�t�z#�"BV��GP,.�O�0Rk�3��s��-�p�_v�eߝ�O���,F��n$=����~��<�ľX�T0b�,��z\�s]",T�L:����� ��a�T�K+�cH&�!)({��%���\�t�j�t0U=��V�V�"�s��8��?��qx_���a<VJ�i-�C�d�����Ei�9�4j�[Ӧ�B82�b8S��p7u�-���SI%�t�`���i/G �V0�̪�M���骀�u�| ;�7š���X�x�~
�-H��c��Ut�˼�Ѯ\��9��6����qiC��!�eda�:4��r�O�Q"8Ҵ�h�qH��]q�ל�K�疌�A��Z"\�E-�t��t?���q�?jJi*��N�>��β"ZM��c�7*3c
�N�ֱ����L���
�"}��RT� Uc>hhRGH�5�P3����m���Έ�5     